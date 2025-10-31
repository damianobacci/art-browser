# ArtBrowser

ArtBrowser is a project to explore 3D art, pin points of interest, and tell their stories.

## Why

You want to explore a monument and learn all its details? ArtBrowser lets you upload a model, drop interactive pointers, and attach text, media or links—so anyone can browse the piece like a guided tour.

## Features to implement (brainstorming)

- Custom 3D model support: .glb, .gltf, .obj/.mtl, more with plugins?
- Point-based annotations ("pins") with markdown support, images, video and links.
- Tour mode: auto-focus through pins in sequence.
- Mobile-friendly orbit / pan / zoom controls.
- Search & filter pins by tag or keyword.

## Tech Stack

- **Monorepo**: Lerna
- **Frontend**: Vite, React, React Three Fiber, Drei
- **Backend**: Node.js, Express, MongoDB, Mongoose
