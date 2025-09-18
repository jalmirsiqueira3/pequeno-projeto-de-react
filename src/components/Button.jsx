function Button(props) {
    return (
        <button
            className="bg-slate-600 cursor-pointer text-white p-2 rounded-md"
            {...props}
        >
            {props.children}
        </button>
    )
}

export default Button;