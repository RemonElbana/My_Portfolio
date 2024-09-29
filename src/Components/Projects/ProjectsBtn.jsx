export default function projectBtn({ isSelected, onSelect, children }) {
    return (
        <button className={isSelected ? "active" : ""} onClick={onSelect}>
            {children}
        </button>
    );
}
