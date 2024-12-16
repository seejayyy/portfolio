"use client";
import projects from "../projectData";
import Image from "next/image";
import Link from "next/link";
import ImageSlider from "../components/ImageSlider";
import React from "react";
import { FiArrowLeft } from "react-icons/fi";

type Params = {
    projectId: string;
}

export default function ProjectDetails( {params} : { params: Promise<Params> } ){
    const resolvedParams = React.use(params);
    const { projectId } = resolvedParams;

    const project = projects.find(project => project.id === projectId);
    
    if (project) {
        const images = project.images;

        return (
            <div className="xl:grid xl:grid-cols-[45fr_55fr] h-screen bg-bg_color relative items-center p-16 bg-footer-pattern bg-right-bottom bg-no-repeat">
                <Link href={"/#portfolio"} className="absolute top-8 left-8 flex flex-row gap-1 items-center"><FiArrowLeft size={24}/> <p className="text-lg">Back</p></Link>
                <ImageSlider>
                    {images.map((image, index) => (
                        <Image
                            key={index}
                            src={image}
                            alt=""
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="h-full w-auto rounded-lg shadow-md flex-shrink-0 object-cover"
                        />
                    ))}
                </ImageSlider>
                <div className="flex flex-col gap-y-4 p-8">
                    <h1 className="text-3xl">{ project.title } ({ project.type })</h1>
                    <div className="text-lg" dangerouslySetInnerHTML={{ __html: project.content }}></div>
                </div>
            </div>
        )
    }   
}