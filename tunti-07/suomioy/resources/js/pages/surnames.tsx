import BasicLayout from '@/layouts/basic-layout';
import { Link } from '@inertiajs/react';
import { FC } from 'react';

// TODO! We will have props soon.
type Props = {
    names: {
        name: string;
        amount: number;
    }[];
};

// array / lista
/*
const arrayLiteral = ['foo', 'bar'];

// objekti (hashmap)
const objectLiteral = {
    foo: 'bar',
    babel: 'webpack',
};
*/

// a header
// footer
// main area
// sidebar

const Surnames: FC<Props> = ({ names }) => {
    return (
        <BasicLayout>
            <h1>Suosituimmat sukunimet!</h1>

            <table>
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
                            <td>
                                <Link className="text-blue-700 underline" href={route('surname', { name: name.name })}>
                                    {name.name}
                                </Link>
                            </td>
                            <td>{name.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </BasicLayout>
    );
};

export default Surnames;
