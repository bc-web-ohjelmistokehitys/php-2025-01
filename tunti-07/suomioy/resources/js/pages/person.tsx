import BasicLayout from '@/layouts/basic-layout';
import { FC } from 'react';

// TODO! We will have props soon.
type Props = {
    person: {
        id: number;
        first_name: string;
        last_name: string;
        birthday: string;
        deathday: string;
    };
};

const Person: FC<Props> = ({ person }) => {
    return (
        <BasicLayout aside={<div>Mahtisivupalkki</div>}>
            <div>
                <h1 className="mb-4 text-3xl font-bold">
                    {person.last_name}, {person.first_name}
                </h1>

                <div className="mx-2 text-lg">
                    <p>Syntymäpäivä: {person.birthday}</p>
                </div>

                <div className="mx-2 text-lg">
                    <p>Kuolinpäivä: {person.deathday}</p>
                </div>
            </div>
        </BasicLayout>
    );
};

export default Person;
