from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from supabase import create_client, Client
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List, Optional
import uuid
from datetime import datetime


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Supabase connection
supabase_url = os.environ['SUPABASE_URL']
supabase_key = os.environ['SUPABASE_ANON_KEY']
supabase: Client = create_client(supabase_url, supabase_key)

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class ProjectResponse(BaseModel):
    id: str
    title: str
    description: str
    category: str
    technologies: List[str]
    github_url: Optional[str]
    live_url: Optional[str]
    image_url: Optional[str]
    featured: bool
    created_at: datetime

class ProjectCreate(BaseModel):
    title: str
    description: str
    category: str
    technologies: List[str]
    github_url: Optional[str] = None
    live_url: Optional[str] = None
    image_url: Optional[str] = None
    featured: bool = False

class ContactMessage(BaseModel):
    name: str
    email: str
    subject: str
    message: str

class ContactResponse(BaseModel):
    id: str
    name: str
    email: str
    subject: str
    message: str
    created_at: datetime


# Routes
@api_router.get("/")
async def root():
    return {"message": "Portfolio API is running"}

# Projects endpoints
@api_router.get("/projects", response_model=List[ProjectResponse])
async def get_projects(category: Optional[str] = None):
    try:
        query = supabase.table("projects").select("*").order("created_at", desc=True)
        
        if category and category != "All":
            query = query.eq("category", category)
        
        result = query.execute()
        
        projects = []
        for project in result.data:
            projects.append(ProjectResponse(
                id=project['id'],
                title=project['title'],
                description=project['description'],
                category=project['category'],
                technologies=project['technologies'] or [],
                github_url=project['github_url'],
                live_url=project['live_url'],
                image_url=project['image_url'],
                featured=project['featured'],
                created_at=project['created_at']
            ))
        
        return projects
    except Exception as e:
        logger.error(f"Error fetching projects: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch projects")

@api_router.post("/projects", response_model=ProjectResponse)
async def create_project(project: ProjectCreate):
    try:
        result = supabase.table("projects").insert({
            "title": project.title,
            "description": project.description,
            "category": project.category,
            "technologies": project.technologies,
            "github_url": project.github_url,
            "live_url": project.live_url,
            "image_url": project.image_url,
            "featured": project.featured
        }).execute()
        
        if not result.data:
            raise HTTPException(status_code=400, detail="Failed to create project")
        
        created_project = result.data[0]
        return ProjectResponse(
            id=created_project['id'],
            title=created_project['title'],
            description=created_project['description'],
            category=created_project['category'],
            technologies=created_project['technologies'] or [],
            github_url=created_project['github_url'],
            live_url=created_project['live_url'],
            image_url=created_project['image_url'],
            featured=created_project['featured'],
            created_at=created_project['created_at']
        )
    except Exception as e:
        logger.error(f"Error creating project: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to create project")

@api_router.put("/projects/{project_id}", response_model=ProjectResponse)
async def update_project(project_id: str, project: ProjectCreate):
    try:
        result = supabase.table("projects").update({
            "title": project.title,
            "description": project.description,
            "category": project.category,
            "technologies": project.technologies,
            "github_url": project.github_url,
            "live_url": project.live_url,
            "image_url": project.image_url,
            "featured": project.featured
        }).eq("id", project_id).execute()
        
        if not result.data:
            raise HTTPException(status_code=404, detail="Project not found")
        
        updated_project = result.data[0]
        return ProjectResponse(
            id=updated_project['id'],
            title=updated_project['title'],
            description=updated_project['description'],
            category=updated_project['category'],
            technologies=updated_project['technologies'] or [],
            github_url=updated_project['github_url'],
            live_url=updated_project['live_url'],
            image_url=updated_project['image_url'],
            featured=updated_project['featured'],
            created_at=updated_project['created_at']
        )
    except Exception as e:
        logger.error(f"Error updating project: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to update project")

@api_router.delete("/projects/{project_id}")
async def delete_project(project_id: str):
    try:
        result = supabase.table("projects").delete().eq("id", project_id).execute()
        
        if not result.data:
            raise HTTPException(status_code=404, detail="Project not found")
        
        return {"message": "Project deleted successfully"}
    except Exception as e:
        logger.error(f"Error deleting project: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to delete project")

# Contact endpoints
@api_router.post("/contact", response_model=ContactResponse)
async def submit_contact_message(contact: ContactMessage):
    try:
        result = supabase.table("contact_messages").insert({
            "name": contact.name,
            "email": contact.email,
            "subject": contact.subject,
            "message": contact.message
        }).execute()
        
        if not result.data:
            raise HTTPException(status_code=400, detail="Failed to submit message")
        
        created_message = result.data[0]
        return ContactResponse(
            id=created_message['id'],
            name=created_message['name'],
            email=created_message['email'],
            subject=created_message['subject'],
            message=created_message['message'],
            created_at=created_message['created_at']
        )
    except Exception as e:
        logger.error(f"Error submitting contact message: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to submit message")

@api_router.get("/contact", response_model=List[ContactResponse])
async def get_contact_messages():
    try:
        result = supabase.table("contact_messages").select("*").order("created_at", desc=True).execute()
        
        messages = []
        for message in result.data:
            messages.append(ContactResponse(
                id=message['id'],
                name=message['name'],
                email=message['email'],
                subject=message['subject'],
                message=message['message'],
                created_at=message['created_at']
            ))
        
        return messages
    except Exception as e:
        logger.error(f"Error fetching contact messages: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch messages")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)
