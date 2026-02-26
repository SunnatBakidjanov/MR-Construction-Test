import { Container } from '@/components/container/Container';
import { Text } from '@/components/text/Text';
import { TitleMain } from '@/components/title-main/TitleMain';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SlMagnifier } from 'react-icons/sl';
import { useResources } from '@/queries/getAllResources.queries';
import { RoundedLoader } from '@/components/loaders/rounded-loader/RoundedLoader';
import { Title } from '@/components/title/Title';
import { MdOutlineRefresh } from 'react-icons/md';

// Блок отображения всех ресурсов
export const ResourcesMain = () => {
    const [search, setSearch] = useState('');
    const { data, isLoading, isFetching, refetch } = useResources();

    const filteredResources = () => {
        if (data?.resources) {
            return data?.resources.filter(resource => resource.name.toLowerCase().includes(search.toLowerCase()));
        }

        return [];
    };
    const filtered = filteredResources();

    return (
        <section className="pt-5 lg:pt-7">
            <Container styleVariant={'inner'}>
                <TitleMain>Список ресурсов</TitleMain>

                <div className="mt-4 sm:mt-5 lg:mt-6">
                    <label
                        htmlFor="search"
                        className="flex items-center gap-2 md:gap-3 pl-2 md:pl-3 border border-(--border-color) rounded-md focus-within:border-(--hover-accent-color)"
                    >
                        <SlMagnifier className="stroke-3 lg:text-lg" />

                        <input
                            autoComplete="off"
                            id="search"
                            type="text"
                            placeholder="Поиск по названию"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            className="outline-none py-2 lg:py-2.5"
                        />
                    </label>

                    <span className="block w-full h-px bg-(--border-color) mt-4 md:mt-5"></span>

                    <div className="space-y-2 mt-2 md:mt-3">
                        <div className="flex justify-end w-full">
                            <button
                                type="button"
                                onClick={() => refetch()}
                                className="p-1.5 cursor-pointer hover:bg-(--bg-card) rounded-full transition-all duration-200 ease-out"
                            >
                                <MdOutlineRefresh className="w-6 h-6" />
                            </button>
                        </div>

                        {isLoading || isFetching ? (
                            // Если состояние pending, отображаем лоадер

                            <div className="flex justify-center w-full mt-20 md:mt-24 lg:mt-28">
                                <RoundedLoader className="md:w-24 md:h-24 lg:w-28 lg:h-28" />
                            </div>
                        ) : data?.resources && data.resources.length <= 0 ? (
                            // Если нет ресурсов в БД, тогда отображаем "Ресурсы не добавлены"

                            <Title as={'h3'} styleVariant={'lg'} className="font-semibold">
                                Ресурсы не добавлены
                            </Title>
                        ) : filtered.length === 0 ? (
                            // Если поиск не дал результатов, тогда отображаем "Ресурсы не найдены"

                            <Title as={'h3'} styleVariant={'lg'} className="font-semibold">
                                Ресурсы не найдены
                            </Title>
                        ) : (
                            // Если поиск дал результаты, тогда отображаем список

                            <ul className="space-y-2">
                                {filtered.map(resource => (
                                    <li
                                        key={resource.id}
                                        className="flex justify-between items-center rounded-md gap-5 md:gap-7 py-3.5 px-2 md:px-2.5 border border-(--border-color)"
                                    >
                                        <Text styleVariant={'sm'} className={'leading-relaxed'}>
                                            {resource.name}
                                        </Text>

                                        <Text styleVariant={'sm'}>
                                            <Link
                                                to={''}
                                                className="py-2 px-6 bg-(--bg-accent) text-(--both-white) hover:bg-(--hover-accent-color) rounded transition-all duration-200 ease-out shadow-[0_2px_2px_var(--shadow-main-color)]"
                                            >
                                                Перейти
                                            </Link>
                                        </Text>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </Container>
        </section>
    );
};
