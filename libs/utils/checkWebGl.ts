export default function hasWebGlSupport() {
    if (typeof window === 'undefined') return false;

    try {
        const canvas = document.createElement('canvas');    
        const isWebGl2Supported = !!(window.WebGL2RenderingContext && window.WebGLRenderingContext && (canvas.getContext('webgl2') || canvas.getContext('experimental-webgl2')));
        return isWebGl2Supported;
    } catch (e) {
        console.error(e);
        return false;
    }
}
