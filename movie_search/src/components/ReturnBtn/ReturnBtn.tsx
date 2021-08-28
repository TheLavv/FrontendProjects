import { useActions } from '../../hooks/useActions';
import './ReturnBtn.css'

function ReturnBtn( {history, url}: any ): JSX.Element {
    const cur_url: string = url.slice(0, url.split('').lastIndexOf('/'));
    const {clearMovie} = useActions();
    const goBack = () => {
        history.push(`${cur_url}/`);
        clearMovie()
    }

    return (
    <button className="returnBtn" onClick={goBack}>
        Go Back
    </button>
    );
}

export default ReturnBtn;