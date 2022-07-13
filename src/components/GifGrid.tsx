interface GifGridProps {
    category: string;
}

export const GifGrid = ({ category }: GifGridProps) => {

    return (
        <>
            <h3>{ category }</h3>
        </>
    )
}
