import BasicLayout from '@/layouts/basic-layout';
import { FC } from 'react';

// TODO! We will have props soon.
type Props = {
    name: {
        name: string;
        amount: number;
    };
};

const Surname: FC<Props> = ({ name }) => {
    return (
        <BasicLayout aside={<div>Mahtisivupalkki</div>}>
            <div>
                <h1>
                    {name.name} ({name.amount} kpl)
                </h1>
            </div>
        </BasicLayout>
    );
};

export default Surname;
