function singleton(factory) {
    let instance = null;
    return {
        getInstance: ()=>instance == null ? instance = factory() : instance
    };
}
export { singleton as default };
