export default function hasWebGlSupport() {
    if (typeof window === 'undefined') return false;

    try {
        const canvas = document.createElement('canvas');
        return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
    } catch (e) {
        console.error(e);
        return false;
    }
}
