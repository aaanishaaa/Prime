export const Button = ({children, color}) => {
    return <button className={color} style={{backgroundColor: color}}>{children}</button>;
};