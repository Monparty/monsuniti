/**
 * A titled NES container rendering a circle list of "label : value" rows.
 * Used by the Profile and Education sections.
 */
export default function InfoList({ title, items }) {
    return (
        <div className="nes-container with-title">
            <p className="title">{title}</p>
            <div className="lists pl-3 lg:pl-10">
                <ul className="nes-list is-circle grid gap-4 leading-7">
                    {items.map((item) => (
                        <li key={item.label}>
                            {item.label} : {item.value}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
