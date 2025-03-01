import { FC } from 'react';

// TODO! We will have props soon.
type Props = {
    names: {
        name: string;
        amount: number;
    }[];
};

// array / lista
const arrayLiteral = ['foo', 'bar'];

// objekti (hashmap)
const objectLiteral = {
    foo: 'bar',
    babel: 'webpack',
};

const Surnames: FC<Props> = ({ names }) => {
    return (
        <div>
            <h1>Suosituimmat sukunimet!</h1>

            <table border={5}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {names.map((name, i) => (
                        <tr key={name.name}>
                            <td>{i + 1}</td>
                            <td>{name.name}</td>
                            <td>{name.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Surnames;
