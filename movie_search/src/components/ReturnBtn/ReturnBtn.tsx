import {useMovieActions} from '../../hooks/useMovieActions';
import './ReturnBtn.css'
import {useHistory} from "react-router";

export default function ReturnBtn( {url}: any ): JSX.Element {
    const history = useHistory();
    const cur_url: string = url.slice(0, url.split('').lastIndexOf('/'));
    const {clearMovie} = useMovieActions();

    const goBack = () => {
        history.push(`${cur_url}/`);
        clearMovie()
    }

    return (
    <button id="return-btn" className="returnBtn" onClick={goBack}>
        Go Back
    </button>
    );
}