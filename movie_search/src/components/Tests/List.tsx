import React from "react";

export const List: React.FC<any> = (items: any[] = []) => {

    return (
        <div>
            {
                items.length && (
                    <ul>
                        {
                            items.map((item, index) => <li key={index}>{item}</li>)
                        }
                    </ul>
                )
            }
        </div>
    )
}