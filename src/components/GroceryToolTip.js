import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

export default function GroceryToolTip({ id, children, title, placement = 'top' }) {
    return (
        <OverlayTrigger placement={placement} overlay={<Tooltip id={id}>{title}</Tooltip>}>
            <div>{children}</div>
        </OverlayTrigger>
    )
}