
interface HeadingProps {
    heading: string,
    subHeading: string,
    white?: boolean
}

const Heading = ( { heading, subHeading, white = false } : HeadingProps ) => {
    return (
        <div className={`mb-4 ${white ? 'text-white' : 'text-gray-900'}`}>
            <h2 className="text-2xl font-bold">{heading}</h2>
            <p>{subHeading}</p>
        </div>
    )
}

export default Heading