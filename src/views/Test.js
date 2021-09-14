import useStore from '../store'

const Test = () => {
    const bears = useStore(state => state.bears);

    return (
        <div className="container my-5">
            <h4>testing</h4>
            <p>there are {bears} bear(s) i guess</p>
        </div>
    );
};

export default Test;