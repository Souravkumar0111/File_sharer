import File from "../Models/file.js";

export const uploadImage=async(request,response)=>{
    const fileObj={
    path:request.file.path,
    name:request.file.originalname
    }
    try{
    const file= await  File.create(fileObj);
    console.log(file);
    response.status(200).json({path:`http://localhost:3000/file/${file._id}`})
    }
    catch(error){
    console.log(error.message);
    response.status(500).json({error:error.message})
    }
}

export const downloadFile=async(request,response)=>{
    try{
     const file= await  File.findById(request.params.fileId);
     file.downloadContent++;
     await file.save();
     response.download(file.path,file.name);
    }
    catch{
     console.error(error.message);
     return response.status(200).json({error:error.message});
    }
}