
function testMiddleware({dispatch, getState}) {
    return (next) => {
        return (action) => {
            console.log('PREV STATE:', getState());
            console.log('ACTION', action);
            next(action);
            console.log('NEXT STATE:', getState());
            console.log('------------------------');
        }
    }
}


export default testMiddleware;