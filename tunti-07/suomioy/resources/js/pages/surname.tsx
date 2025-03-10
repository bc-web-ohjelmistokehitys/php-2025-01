import Link from '@/components/Link';
import BasicLayout from '@/layouts/basic-layout';
import clsx from 'clsx';
import { FC } from 'react';

type Props = {
    oldestLiving: {
        id: number;
        first_name: string;
        last_name: string;
        birthday: string;
    }[];

    name: {
        name: string;
        amount: number;
    };
};

const Surname: FC<Props> = ({ name, oldestLiving }) => {
    return (
        <BasicLayout aside={<div>Mahtisivupalkki</div>}>
            <div>
                <h1 className="mb-4 text-3xl font-bold">
                    {name.name} ({name.amount} kpl)
                </h1>

                <ul className="my-4">
                    {oldestLiving.map((person, i) => {
                        // conditional styling demonstrated here; zebra coloring for rows with modulo
                        const classes = clsx('p-2', i % 2 === 0 && 'bg-gray-500', i % 2 !== 0 && 'bg-gray-100');

                        return (
                            <li className={classes} key={person.id}>
                                <Link href={route('person', { id: person.id })}>
                                    {person.last_name}, {person.first_name}
                                </Link>{' '}
                                ({person.birthday}) [#{person.id}]
                            </li>
                        );
                    })}
                </ul>
            </div>
        </BasicLayout>
    );
};

export default Surname;
