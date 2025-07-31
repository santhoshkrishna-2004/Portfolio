#!/usr/bin/env python3
"""
Script to populate initial project data into Supabase
"""
import asyncio
import sys
import os
from pathlib import Path

# Add the backend directory to Python path so we can import modules
sys.path.append(str(Path(__file__).parent))

from server import supabase, logger

# Initial projects data (matching mock.js)
INITIAL_PROJECTS = [
    {
        "title": "Adaptive AI Tutor",
        "description": "Design a clean student dashboard for an Adaptive AI Tutor with intelligent learning paths and personalized content recommendations.",
        "category": "AI",
        "technologies": ["React", "Python", "TensorFlow", "Node.js"],
        "github_url": "https://github.com/santhoshkrishna-2004/Adaptive-Tutor",
        "live_url": None,
        "image_url": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop",
        "featured": True
    },
    {
        "title": "Sketch to Image",
        "description": "Converts hand-drawn sketches into realistic images using deep learning models and advanced computer vision techniques.",
        "category": "AI",
        "technologies": ["Python", "PyTorch", "OpenCV", "Flask"],
        "github_url": "https://github.com/santhoshkrishna-2004/Sketch-To-Image-Web-App",
        "live_url": None,
        "image_url": "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=250&fit=crop",
        "featured": True
    },
    {
        "title": "Blood Bank Management System",
        "description": "Django-based comprehensive application for managing blood donations, requests, donor authentication, and inventory tracking.",
        "category": "Web",
        "technologies": ["Django", "Python", "PostgreSQL", "Bootstrap"],
        "github_url": "https://github.com/santhoshkrishna-2004/RTP-Blood-Bank-Management",
        "live_url": None,
        "image_url": "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop",
        "featured": False
    }
]

def populate_projects():
    """Populate the projects table with initial data"""
    try:
        # Check if projects already exist
        existing_projects = supabase.table("projects").select("*").execute()
        
        if existing_projects.data:
            print(f"✅ Projects table already has {len(existing_projects.data)} projects. Skipping population.")
            return
        
        print("🚀 Populating projects table with initial data...")
        
        # Insert all projects
        result = supabase.table("projects").insert(INITIAL_PROJECTS).execute()
        
        if result.data:
            print(f"✅ Successfully inserted {len(result.data)} projects:")
            for project in result.data:
                print(f"   - {project['title']} ({project['category']})")
        else:
            print("❌ Failed to insert projects")
            
    except Exception as e:
        print(f"❌ Error populating projects: {str(e)}")
        logger.error(f"Error populating projects: {str(e)}")

if __name__ == "__main__":
    populate_projects()