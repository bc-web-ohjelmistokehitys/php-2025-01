import BasicLayout from '@/layouts/basic-layout';
import { useForm } from '@inertiajs/react';
import { FC } from 'react';

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
    const { errors, data, setData, post, processing } = useForm({
        deathday: person.deathday || '2025-03-07',
    });

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

                                post(target);
                            }}
                        >
                            {errors.deathday && <div className="mx-2 text-red-600">{errors.deathday}</div>}
                            <input
                                type="date"
                                name="deathday"
                                id="deathday"
                                value={data.deathday}
                                onChange={(e) => {
                                    setData('deathday', e.target.value);
                                }}
                            />
                            <button disabled={processing} type="submit" className="border-4 disabled:opacity-50">
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
