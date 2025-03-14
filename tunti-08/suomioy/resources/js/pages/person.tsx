import BasicLayout from '@/layouts/basic-layout';
import { router } from '@inertiajs/react';
import { FC, useState } from 'react';

// TODO! We will have props soon.
type Props = {
    person: {
        id: number;
        first_name: string;
        last_name: string;
        birthday: string;
        deathday: string | null;
    };
};

/*

" " <- hipsu
'' <- yksöishipsu
`` <- backticks


*/

const Person: FC<Props> = ({ person }) => {
    const [deathday, setDeathday] = useState(person.deathday || '2025-03-07');

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

                {!person.deathday && (
                    <div className="mx-2 text-lg">
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                // TODO: route func
                                const target = `/person/${person.id}`;

                                router.post(target, {
                                    deathday,
                                });
                            }}
                        >
                            <input
                                type="date"
                                name="deathday"
                                id="deathday"
                                value={deathday}
                                onChange={(e) => {
                                    setDeathday(e.target.value);
                                }}
                            />
                            <button type="submit" className="border-4">
                                hep
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </BasicLayout>
    );
};

export default Person;
