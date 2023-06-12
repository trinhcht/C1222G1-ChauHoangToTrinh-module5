import React, { useState } from 'react';

export function Dropdown() {
    const [showSelect, setShowSelect] = useState(false);

    function toggleSelect() {
        setShowSelect(!showSelect);
    }

    return (
        <div className="dropdown text-center mt-3" style={{paddingRight: 360}}>
            <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={toggleSelect}
            >
                Danh sách cơ sở
            </button>
            <select id="room-select" style={{display: showSelect ? 'block' : 'none'}}>
                <option value="1">Phòng</option>
                <option value="2">Căn hộ</option>
                <option value="3">Biệt thự</option>
            </select>
        </div>
    );
}
