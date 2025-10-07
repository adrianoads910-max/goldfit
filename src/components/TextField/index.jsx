export const TextField = ({ label, id, ...props }) => {
    return (
        <fieldset className="flex flex-col gap-2 mb-2">
            <label htmlFor={id}>{label}</label>

            <input className="border rounded-lg p-2" id={id}

                {...props} />
        </fieldset>
    )
}