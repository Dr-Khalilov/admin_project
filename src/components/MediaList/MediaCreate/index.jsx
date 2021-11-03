import {
    Create,
    SimpleForm,
    ImageInput,
    ImageField,
} from 'react-admin';

export const MediaCreate = props => (
    <Create title='Create a media' {...props}>
        <SimpleForm>
            <ImageInput accept='image/*' multiple placeholder={<p>Drop your file here</p>} source='url'>
                <ImageField source='url' title='name' />
            </ImageInput>
        </SimpleForm>
    </Create>
);