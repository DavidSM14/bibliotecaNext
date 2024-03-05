
import Button from '@/components/button-form'

function form({ action, title, libreria, disabled = false }) {

    return (
        <form action={action} className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-lg shadow-lg" >
            <input type='hidden' name='id' value={libreria?.id} />
            <fieldset disabled={disabled}>
                <label htmlFor='nombre'>Nombre</label>
                <input type='text' id='nombre' name='nombre'
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-500"
                    placeholder='Nombre'
                    defaultValue={libreria?.nombre} ></input>
                <label htmlFor='ciudad'>ciudad</label>
                <input type='text' id='ciudad' name='ciudad'
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-500"
                    placeholder='ciudad'
                    defaultValue={libreria?.ciudad} />
                <label htmlFor='email'>email</label>
                <input type='text' id='email' name='email'
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-500 mb-5"
                    placeholder='email'
                    defaultValue={libreria?.email} />
            </fieldset>
            <Button title={title} />
        </form>
    )
}

export default form

