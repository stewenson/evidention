import React from 'react';
import './Task.scss';

function Task() {
    return (
        <div className="Task">
            <h3>Elektronická evidence kosmonautů</h3>
            <p>
                Prosím o vytvoření jednoduché stránky, na které bude možné evidovat kosmonauty a spravovat  jejich seznam.
                Určitě by bylo vhodné, aby stránka umožňovala vložit do evidence nového kosmonauta,
                editovat je a vidět již evidované kosmonauty.
            </p>
            <br />
            <h5>Ke každému kosmonautovi potřebujeme evidovat:</h5>
            <ul>
                <li>Jméno</li>
                <li>Příjmení</li>
                <li>Datum narození</li>
                <li>Superschopnost</li>
            </ul>
        </div>
    )
}

export default Task;