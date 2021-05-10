export function normalizeUrl(url: string): string {
    if ((url.split(''))[url.length - 1] === '/')
        return (url.slice(0, -1));
    return (url);
}

export function handleTextHighlight(title: string, input: React.RefObject<HTMLInputElement>) {
    let search_str: string = '';
    if (input.current?.value !== undefined)
        search_str = input.current?.value.trim();
    let ind: number = title.toLowerCase().indexOf(search_str.toLowerCase());
    if (ind === -1) {
        return ({
            before: title,
            search_str: '',
            after: ''
        });
    }
    let before: string = title.split('').slice(0, ind).join('');
    search_str = title.split('').slice(ind, ind + search_str.length).join('');
    let after: string = title.split('').slice(ind + search_str.length, title.length).join('');
    return ({
        before: before,
        search_str: search_str,
        after: after,
    });
}