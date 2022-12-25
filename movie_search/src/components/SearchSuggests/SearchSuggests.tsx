import {useTypedSelector} from '../../hooks/useTypedSelector'
import { useEffect } from 'react'
import { handleTextHighlight } from '../../utils'
import './SearchSuggests.css'

function SearchSuggests({ input, suggestsBox }: any): JSX.Element {
    const movie = useTypedSelector(state => state.movie.movie);

    const handleSuggestClick = (e: any) => {
        input.current.value = e.target.id;
    }

    useEffect(() => {
        document.addEventListener('click', (e) => {
            if (suggestsBox !== null && suggestsBox.current !== null && e.target !== input.current)
                suggestsBox.current.style.display = 'none';
        })
    }, [input, suggestsBox])

    return (
        <div>
            {
                !!movie && !!movie.length && (
                    movie.map((el: any) => {
                        const decomposed_str = handleTextHighlight(el.title, input);
                        return (
                            <button className="suggestsBox-suggest" onClick={handleSuggestClick} id={decomposed_str.before + decomposed_str.search_str + decomposed_str.after}>
                                <span id={decomposed_str.before + decomposed_str.search_str + decomposed_str.after}>{decomposed_str.before}</span>
                                <span className="suggestsBox-suggest-search_str" id={decomposed_str.before + decomposed_str.search_str + decomposed_str.after}>{decomposed_str.search_str}</span>
                                <span id={decomposed_str.before + decomposed_str.search_str + decomposed_str.after}>{decomposed_str.after}</span>
                            </button>
                        )
                    })
                )
            }
        </div>
    )
}

export default SearchSuggests;