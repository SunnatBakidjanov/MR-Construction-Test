import type { UseQueryResult } from '@tanstack/react-query';
import { MdOutlineRefresh } from 'react-icons/md';

type Props<TData = unknown, TError = unknown> = {
    refetch: UseQueryResult<TData, TError>['refetch'];
};

// Кнопка для повторного запроса данных
export const BtnRefetch = ({ refetch }: Props) => {
    return (
        <div className="flex justify-end w-full">
            <button
                type="button"
                onClick={() => refetch()}
                className="p-1.5 cursor-pointer hover:bg-(--bg-card) rounded-full transition-all duration-200 ease-out"
            >
                <MdOutlineRefresh className="w-6 h-6" />
            </button>
        </div>
    );
};
