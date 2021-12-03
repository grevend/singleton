function singleton(factory) {
    let instance = null;
    return {
        getInstance: ()=>instance == null ? instance = factory() : instance
        ,
        setInstance: (x)=>instance = x
    };
}
export { singleton as default };
