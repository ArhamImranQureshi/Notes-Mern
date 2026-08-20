export const getNotes = (req,res)=>{
    res.status(200).json({message:"Welcome to the Notes API!"})
}
export const postNotes = (req,res)=>{
    res.status(201).json({message:"Note created successfully!"})
}
export const updateNotes = (req,res)=>{
    res.status(200).json({message:"Note updated successfully!"})
}
export const deleteNotes = (req,res)=>{
    res.status(200).json({message:"Note deleted successfully!"})
}