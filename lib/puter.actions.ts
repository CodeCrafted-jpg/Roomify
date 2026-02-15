import puter from "@heyputer/puter.js";
import { getOrCreateHostingConfig, uploadImageToHosting } from "./puter.hosting";
import { isHostedUrl } from "./utils";


export const signIn=async ()=>await puter.auth.signIn();

export const signOut= ()=> puter.auth.signOut();

export const getCurrentUser =async ()=>{
    try {
        return await puter.auth.getUser()
    } catch  {
        return null;
    }
}

export const createProject = async ({item}:CreateProjectParams):
Promise<DesignItem | null | undefined> =>{
    const projectId=item.id;
    const hosting=await getOrCreateHostingConfig();
    const hostedSource= projectId ?
    await uploadImageToHosting({
        hosting,
        url: item.sourceImage,
        projectId,
        label:"source"
    }) : null;
    const hostedRender = projectId && item.renderedImage ?
    await uploadImageToHosting({
        hosting,
        url: item.renderedImage,
        projectId,
        label:"rendered"
    }) : null;

    const resolvedSource = hostedSource?.url || (isHostedUrl(item.sourceImage) ? item.sourceImage : '');
    if(!resolvedSource) {
        console.warn(`Could not resolve source image for project ${projectId}`);
        return null;
    }
    const resolvedRendered = hostedRender?.url 
    ? hostedRender?.url
       : item.renderedImage && isHostedUrl(item.renderedImage) ? item.renderedImage : undefined;

       const {
        sourcePath: _sourcePath,
        renderedPath: _renderedPath,
        publicPath: _publicPath,
        ...rest
       }=item

       const playload={
        ...rest,
        sourceImage: resolvedSource,
        renderedImage: resolvedRendered
       }
       try {
        //call puter worked to syore in kv storage
       } catch (e) {
        console.log(`Failed to create project ${projectId}:`, e);
        return null;
       }
}   