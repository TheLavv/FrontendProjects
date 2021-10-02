import React, {RefObject, useCallback, useState} from 'react'
import {useRouteMatch, useHistory} from 'react-router-dom';
import './SearchPage.css'
import { normalizeUrl} from '../../utils'
import {useMovieActions} from '../../hooks/useMovieActions';
import { useTypedSelector } from '../../hooks/useTypedSelector'
import SearchSuggests from '../SearchSuggests/SearchSuggests';
import axios from "axios";
import {host} from "../../store";


function SearchPage(): JSX.Element {
    const history: any = useHistory();
    const match = useRouteMatch();
    const input = React.useRef<HTMLInputElement>(null);
    const inputDelete = React.useRef<HTMLInputElement>(null);
    const cur_url: string = normalizeUrl(match.url);
    const suggestsBoxRef: any = React.useRef<HTMLDivElement>(null);
    const suggestsBoxDeleteRef: any = React.useRef<HTMLDivElement>();
    const {fetchMovie} = useMovieActions();
    const movie = useTypedSelector(state => state.movie.movie);
    const [movieToDelete, setMovieToDelete] = useState<string>('');

    const deleteData = useCallback(() => {
        axios.delete(`${host}/movies/${movieToDelete}`)
            .then(() => alert('success'))
            .catch(() => alert('error'))
    }, [movieToDelete])

    const putData = () => {
        axios.put(`${host}/movies/2`, {
            id: 2,
            name: 'Доктор кто?'
        })
    }

    const postData = () => {
        axios.post(`${host}/movies/`, [{"adult":false,"backdrop_path":null,"genre_ids":[878,28,12],"id":700330,"original_language":"en","original_title":"Untitled Taika Waititi Star Wars Film","overview":"","popularity":1.4,"poster_path":null,"title":"Звёздные войны","video":false,"vote_average":0,"vote_count":0},{"adult":false,"backdrop_path":null,"genre_ids":[878,16,35],"id":42982,"original_language":"en","original_title":"Robot Chicken: Star Wars Episode II","overview":"Второй эпизод из серии пародий на сагу о Звездных Войнах.","popularity":7.534,"poster_path":"/15L0z57jELdzynqcbWq0fFFou48.jpg","release_date":"2008-11-16","title":"Робоцып: Звездные войны. Эпизод II","video":false,"vote_average":7.5,"vote_count":101},{"adult":false,"backdrop_path":null,"genre_ids":[35,878,16],"id":51888,"original_language":"en","original_title":"Robot Chicken: Star Wars Episode III","overview":"Третий эпизод из серии пародий на сагу о Звездных Войнах.","popularity":7.681,"poster_path":"/mi2lVho2zpfwcxI6yC1QYJi435D.jpg","release_date":"2010-12-19","title":"Робоцып: Звездные войны. Эпизод III","video":false,"vote_average":7.4,"vote_count":105},{"adult":false,"backdrop_path":"/sNNFLEcAuy4C3RyXCnKoArn7Aty.jpg","genre_ids":[16,28,878,12],"id":12180,"original_language":"en","original_title":"Star Wars: The Clone Wars","overview":"На передовых позициях межгалактической войны Добра и Зла — снова любимые герои: Анакин Скайуокер, Оби-Ван Кеноби и Падме Амидала, а также присоединившийся к ним падаван Анакина, Асока. Противостоящие им злодеи — Палпатин, граф Дуку и генерал Гривус — вынашивают план захвата Галактики. Начинается последняя схватка, и судьбы Вселенной вверены рыцарям-джедаям. Их подвиги станут самыми яркими эпизодами масштабных битв и подарят множество удивительных открытий.","popularity":29.523,"poster_path":"/ywRtBu88SLAkNxD0GFib6qsFkBK.jpg","release_date":"2008-08-05","title":"Звёздные войны: Войны клонов","video":false,"vote_average":6.1,"vote_count":1421},{"adult":false,"backdrop_path":null,"genre_ids":[99],"id":378386,"original_language":"en","original_title":"Star Wars: Greatest Moments","overview":"Алекс Зейн подсчитывает 20 лучших моментов из «Звездных войн», как проголосовала общественность. Включает в себя участие известных поклонников, а также звезд и экипажа межгалактической саги.","popularity":4.272,"poster_path":"/zIffPwISrW48qSmvAXEV27lBTMA.jpg","release_date":"2015-12-26","title":"Звездные войны: величайшие моменты","video":false,"vote_average":6.6,"vote_count":19},{"adult":false,"backdrop_path":"/jn52me8AagfNt7r84SgQbV0R9ZG.jpg","genre_ids":[28,12,878],"id":181812,"original_language":"en","original_title":"Star Wars: The Rise of Skywalker","overview":"Фильм завершает невероятную историю семьи Скайуокеров, длящуюся уже более сорока лет, и обещает дать ответы на все загадки из предыдущих серий. Зрителя ожидают старые и новые герои, уникальные миры, увлекательные путешествия на край Галактики и грандиозный финал фантастической саги.","popularity":124.076,"poster_path":"/mCD1ugUVWwa1pOmOACQY8sV7eu9.jpg","release_date":"2019-12-18","title":"Звёздные войны: Эпизод 9 - Скайуокер. Восход","video":false,"vote_average":6.5,"vote_count":6991},{"adult":false,"backdrop_path":"/uNjBnOmdjZoiWTLQ938YJZ1cYVU.jpg","genre_ids":[16,35,10751,878,12,10770],"id":392216,"original_language":"en","original_title":"Phineas and Ferb: Star Wars","overview":"","popularity":10.487,"poster_path":"/xomphpz7MIasqVluPX83TjoTL8G.jpg","release_date":"2014-07-26","title":"Финес и Ферб: Звездные войны","video":false,"vote_average":7,"vote_count":116},{"adult":false,"backdrop_path":"/1Lhc32P0a62BgMFgd20wXR1osR3.jpg","genre_ids":[16,12,35,10751,878],"id":732670,"original_language":"en","original_title":"The Lego Star Wars Holiday Special","overview":"В спецвыпуске Рей, Финн, По, Чуи, Роуз и дроиды воссоединятся на экране для празднования Дня жизни. Чтобы лучше познать силу, Рей вместе с BB-8 прилетает в таинственный храм джедаев, откуда с помощью загадочного артефакта отправляется в приключение по любимым моментам франшизы. Она встретится с Люком Скайуокером, Дартом Вейдером, Йодой, Оби-Ваном и другими знаковыми героями и злодеями.","popularity":47.04,"poster_path":"/zyzJSI7UZZzz5Toj10rYGF5689z.jpg","release_date":"2020-11-17","title":"ЛЕГО Звёздные войны: Праздничный спецвыпуск","video":false,"vote_average":6.7,"vote_count":187},{"adult":false,"backdrop_path":"/jTB8BKStGgIktED2yVMA6U6mppl.jpg","genre_ids":[16,878,35,10751],"id":79158,"original_language":"en","original_title":"LEGO Star Wars: Bombad Bounty","overview":"","popularity":2.402,"poster_path":"/r088BCbLiSxccTHXxIZBZ5olRvM.jpg","release_date":"2010-11-27","title":"Lego Звездные войны: Награда Бомбада","video":false,"vote_average":5.8,"vote_count":19},{"adult":false,"backdrop_path":null,"genre_ids":[16,35,878],"id":42979,"original_language":"en","original_title":"Robot Chicken: Star Wars","overview":"«Робоцып» — калейдоскоп коротких скетчей, полных чёрного юмора и сатиры. Практически каждая сценка пародирует кино, теле-шоу, компьютерные игры, героев мультфильмов и комиксов, актёров, политиков, певцов и других знаменитостей, а также продукты питания, рекламные ролики или прочие проявления массовой культуры. На этот раз, это «Звездные Войны»…","popularity":7.968,"poster_path":"/h44WN4mVJ6wEpJgLaaNoFjv0NAo.jpg","release_date":"2007-07-17","title":"Робоцып: Звездные войны","video":false,"vote_average":7.2,"vote_count":176},{"adult":false,"backdrop_path":null,"genre_ids":[16,878,10751],"id":81233,"original_language":"en","original_title":"LEGO Star Wars: The Quest for R2-D2","overview":"В новом измерении звёздных войн, построенных из конструктора LEGO, всё маленькое, милое и забавное. Анакин Скайуокер и R2-D2 на истребителе спасаются с вражеской планеты, где они завершили важную миссию. При атаке преследователей R2-D2 выпадает с корабля и на парашуте приземляется в пустыню, где попадает в плен…","popularity":1.568,"poster_path":"/pfI6dMB5aplRYe7vSniDznnFWUx.jpg","release_date":"2009-06-27","title":"Lego Звездные войны: Поиск R2-D2","video":false,"vote_average":5.2,"vote_count":20},{"adult":false,"backdrop_path":"/ae9xlnkS2qb5Dy9Mtlu68AWh42O.jpg","genre_ids":[12,35,10751,878,10770],"id":74849,"original_language":"en","original_title":"The Star Wars Holiday Special","overview":"","popularity":9.348,"poster_path":"/1TY4OAkcHRovlHDxSLW7UDJlild.jpg","release_date":"1978-12-01","title":"Звездные войны: Праздничный спецвыпуск","video":false,"vote_average":3.2,"vote_count":326},{"adult":false,"backdrop_path":"/A0wfk0gISF7gH78CKCfLlkAf1Vs.jpg","genre_ids":[878,12,28],"id":1895,"original_language":"en","original_title":"Star Wars: Episode III - Revenge of the Sith","overview":"Идёт третий год Войн клонов. Галактическая Республика, некогда бывшая спокойным и гармоничным государством, превратилась в поле битвы между армиями клонов, возглавляемых канцлером Палпатином, и армадами дроидов, которых ведёт граф Дуку, тёмный лорд ситхов. Республика медленно погружается во тьму. Лишь рыцари-джедаи, защитники мира и справедливости, могут противостоять злу, которое вскоре поглотит галактику. Но настоящая битва идёт в душе у молодого рыцаря-джедая Энакина, который разрывается между долгом джедая и любовью к своей жене, сенатору Падме Амидале. И от того, какое чувство в нём победит, зависит будущее всего мира.","popularity":25.63,"poster_path":"/yshcD6BJ66tHvLKyKR7BcSQo3MQ.jpg","release_date":"2005-05-17","title":"Звёздные войны: Эпизод 3 - Месть Ситхов","video":false,"vote_average":7.4,"vote_count":10593},{"adult":false,"backdrop_path":"/hVl0qfLZ5loznDgQ0HxCTZqvZhz.jpg","genre_ids":[16,10751,878,35,12],"id":70608,"original_language":"en","original_title":"LEGO Star Wars: The Padawan Menace","overview":"Рядовая экскурсия Академии джедаев неожиданно превращается в веселое приключение в мультфильме Lego. Звездные войны: Падаванская угроза. Мастер Йода сопровождает группу джедаев-экскурсантов в палаты Сената, как вдруг ощущает возмущение Силы. Он призван помочь спасти Республику, но, оказавшись на своем корабле, обнаруживает, что юный джедай Йен тайком проник туда... и теперь жаждет приключений. Тем временем C-3PO и R2-D2, оставшиеся присматривать за группой экскурсантов, понимают, что влипли по уши. И пока коварные ситхи готовятся нанести решающий удар, Йода и Дроиды должны позаботиться, чтобы их подопечные не рассыпались на кубики.","popularity":11.269,"poster_path":"/dzI7fwoZHi9uquYZqTh0WVxpnOq.jpg","release_date":"2011-07-22","title":"LEGO Звездные войны: Падаванская угроза","video":false,"vote_average":6.3,"vote_count":98},{"adult":false,"backdrop_path":"/zqkmTXzjkAgXmEWLRsY4UpTWCeo.jpg","genre_ids":[12,28,878],"id":11,"original_language":"en","original_title":"Star Wars","overview":"Татуин. Планета-пустыня. Уже постаревший рыцарь Джедай Оби Ван Кеноби спасает молодого Люка Скайуокера, когда тот пытается отыскать пропавшего дроида. С этого момента Люк осознает свое истинное назначение: он один из рыцарей Джедай. В то время как гражданская война охватила галактику, а войска повстанцев ведут бои против сил злого Императора, к Люку и Оби Вану присоединяется отчаянный пилот-наемник Хан Соло, и в сопровождении двух дроидов, R2D2 и C-3PO, этот необычный отряд отправляется на поиски предводителя повстанцев — принцессы Леи.","popularity":58.915,"poster_path":"/291yZULc4NBE9QDxqHGAJUk41j7.jpg","release_date":"1977-05-25","title":"Звёздные войны: Эпизод 4 - Новая надежда","video":false,"vote_average":8.2,"vote_count":15906},{"adult":false,"backdrop_path":"/5fu7fzy4NZTsL1Jap00UBIInAuB.jpg","genre_ids":[12,28,878],"id":1893,"original_language":"en","original_title":"Star Wars: Episode I - The Phantom Menace","overview":"Мирная и процветающая планета Набу. Торговая федерация, не желая платить налоги, вступает в прямой конфликт с королевой Амидалой, правящей на планете, что приводит к войне. На стороне королевы и республики в ней участвуют два рыцаря-джедая: учитель и ученик, Квай-Гон-Джин и Оби-Ван Кеноби...","popularity":28.619,"poster_path":"/l1LyrhQwDGur18rxRXKQJQhvx7Y.jpg","release_date":"1999-05-19","title":"Звёздные войны: Эпизод 1 - Скрытая угроза","video":false,"vote_average":6.5,"vote_count":11310},{"adult":false,"backdrop_path":"/dNt5q68BBkddBxlvrHDa1apyBy8.jpg","genre_ids":[12,28,878],"id":1894,"original_language":"en","original_title":"Star Wars: Episode II - Attack of the Clones","overview":"Действие разворачивается через 10 лет после событий, описанных в первом эпизоде знаменитой саги. Республика все глубже погружается в пучину противоречий и хаоса. Движение сепаратистов, представленное сотнями планет и могущественным альянсом корпораций, грозит стать новой угрозой для Галактики, с которой не смогут справиться даже джедаи.","popularity":25.105,"poster_path":"/jGiIdLMD5Y16snttJwUcQSDBXUv.jpg","release_date":"2002-05-15","title":"Звёздные войны: Эпизод 2 - Атака клонов","video":false,"vote_average":6.5,"vote_count":10218},{"adult":false,"backdrop_path":"/aM1dP91YFVPsgq1WG8vMwip9zLe.jpg","genre_ids":[878,16,10751,35,12],"id":136406,"original_language":"en","original_title":"LEGO Star Wars: The Empire Strikes Out","overview":"Во времена гражданской войны Галактическая империя угрожала подавить народное восстание с помощью совершенного оружия: Звезды смерти. Принцесса Лиа и повстанческий альянс одержали важную победу, но праздновать некогда. Чтобы избежать преследования за уничтожение Звезды смерти они принимают решение эвакуироваться на секретную базу, которая находится на Хоте…","popularity":4.854,"poster_path":"/ikUhOSuKOd9Sjf6dVP585lFtiLb.jpg","release_date":"2012-09-24","title":"LEGO Звездные войны: Империя наносит удар","video":false,"vote_average":6.5,"vote_count":60},{"adult":false,"backdrop_path":"/k6EOrckWFuz7I4z4wiRwz8zsj4H.jpg","genre_ids":[28,12,878,14],"id":140607,"original_language":"en","original_title":"Star Wars: The Force Awakens","overview":"Через тридцать лет после гибели Дарта Вейдера и Императора галактика по-прежнему в опасности. Государственное образование Новый Порядок во главе с их таинственным верховным лидером Сноуком и его правой рукой Кайло Реном идёт по стопам Империи, пытаясь захватить всю власть. В это нелёгкое время судьба сводит юную девушку Рей и бывшего штурмовика Нового Порядка Финна с героями времён войны с Империей — Ханом Соло, Чубаккой и Королевой Леей. Вместе они должны дать бой Новому Порядку, однако настаёт тот момент, когда становится очевидно, что лишь джедаи могут остановить Сноука и Кайло Рена. И в галактике в живых остаётся только один.","popularity":48.946,"poster_path":"/5ltRJxurOTIaMQwcOwSau7l3GME.jpg","release_date":"2015-12-15","title":"Звёздные войны: Эпизод 7 - Пробуждение силы","video":false,"vote_average":7.3,"vote_count":16080},{"adult":false,"backdrop_path":"/iP2tEA2A77qhbhRfcFkiD6WFOqH.jpg","genre_ids":[12,28,878],"id":1892,"original_language":"en","original_title":"Return of the Jedi","overview":"В заключительном шестом эпизоде «Звездных войн» Дарт Вейдер создает вторую «Звезду Смерти». Он объединяет все силы зла, чтобы с помощью этого смертоносного оружия нанести последний сокрушительный удар по повстанцам и их союзникам. Люк Скайуокер вместе с принцессой Лейей и верными дроидами R2D2 и C-3PO отправляется спасать своего друга Хана Соло, который попал в плен к отвратительному Джаббе Хатту — могущественному повелителю преступников.","popularity":23.34,"poster_path":"/qK7EmIccOeL16jzhwpvNzBSOQxS.jpg","release_date":"1983-05-25","title":"Звёздные войны: Эпизод 6 - Возвращение Джедая","video":false,"vote_average":7.9,"vote_count":11743}])
    }

    const findMovie = () => {
        if (input.current !== null && input.current.value.trim().length > 0)
            history.push(`${cur_url}/movieInfo/${input.current.value.trim()}`);
    };
    const enterPress = (e: any) => {
        if(e.key === 'Enter')
            findMovie();
    };

    const handleChangeSearch = (e: any) => {
        const search_str: string = e.target.value.trim();
        if (search_str.length > 0)
            fetchMovie(search_str);
    }

    const handleInputClick = (ref: RefObject<any>) => {
        if (ref !== null)
                ref.current.style.display = 'flex';
    }

    const handleDeleteInputChange = useCallback((value) => {
        const search_str: string = value.trim();
        if (search_str.length > 0)
            fetchMovie(search_str);
        setMovieToDelete(value);
    }, [setMovieToDelete])

    return (
        <div className="finder">
            <span className="finder-header">Movie Search</span>
            <div className="finderBox">
                <span className="finderBox-text">Enter your request</span>
                <div className="finderBox-searchFieldBox">
                    <div className="finderBox-searchFieldBox-content">
                        <input
                            onClick={() => handleInputClick(suggestsBoxRef)}
                            className="finderBox-input"
                            placeholder="Type to search"
                            type="text"
                            ref={input}
                            onKeyPress={enterPress}
                            onChange={handleChangeSearch}
                        />
                        <div className="suggestsBox" ref={suggestsBoxRef}>
                            {
                                movie && movie !== 404 && (
                                    <SearchSuggests input={input} suggestsBox={suggestsBoxRef} />
                                )
                            }
                        </div>
                    </div>
                    <button className="finderBox-btn" onClick={findMovie}>Find</button>
                </div>
                <div className="finderBox-searchFieldBox">
                    <div className="finderBox-searchFieldBox-content">
                        <input
                            className="finderBox-input"
                            placeholder="Enter title"
                            type="text"
                            value={movieToDelete}
                            onChange={(e) => handleDeleteInputChange(e.target.value)}
                            ref={inputDelete}
                            onClick={() => handleInputClick(suggestsBoxDeleteRef)}
                        />
                        <div className="suggestsBox" ref={suggestsBoxDeleteRef}>
                            {
                                movie && movie !== 404 && (
                                    <SearchSuggests input={inputDelete} suggestsBox={suggestsBoxDeleteRef} />
                                )
                            }
                        </div>
                    </div>
                    <button className="finderBox-btn" onClick={deleteData}>Delete</button>
                </div>
                <button className="finderBox-btn" onClick={postData}>Post</button>
                <button className="finderBox-btn" onClick={putData}>Put</button>
            </div>
        </div> 
    )
}

export default SearchPage;