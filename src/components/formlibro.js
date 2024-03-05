import Button from '@/components/button-form'

function form({ action, title, libro, disabled = false }) {

    return (
        <form action={action} className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-lg shadow-lg" >
            <input type='hidden' name='id' value={libro?.id} />
            <fieldset disabled={disabled}>
                <label htmlFor='nombre'>Nombre</label>
                <input type='text' id='nombre' name='nombre'
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-500"
                    placeholder='Nombre'
                    defaultValue={libro?.nombre} autoFocus ></input>
                <label htmlFor='autor'>autor</label>
                <input type='text' id='autor' name='autor'
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-500"
                    placeholder='autor'
                    defaultValue={libro?.autor} />
                <label htmlFor='literatura'>literatura</label>
                <input type='text' id='literatura' name='literatura'
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-500 mb-5"
                    placeholder='literatura'
                    defaultValue={libro?.literatura} />
            </fieldset>
            <Button title={title} />
        </form>
    )
}

export default form