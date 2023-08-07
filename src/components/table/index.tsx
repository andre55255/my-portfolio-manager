import React, { useState } from "react";
import {
    ActionButtonsStyled,
    ButtonPaginationStyled,
    ContainerStyled,
    PaginationStyled,
    SearchBarStyled,
    SearchInputStyled,
    TableBodyStyled,
    TableHeaderStyled,
    TableStyled,
} from "./styled";
import { FaSearch, FaEdit, FaTrash } from "react-icons/fa";
import InputSelectDefault from "../forms/input-select-default";
import { SelectObjectType } from "../../types/select-object";

interface RowData {
    columns: SelectObjectType[];
    data: any[];
}

export default function TableComponent({ columns, data }: RowData) {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [tableRows, setTableRows] = useState<any[]>([...data]);
    const [itemsPerPage, setItemsPerPage] = useState<number>(5);
    const [currentPage, setCurrentPage] = useState<number>(1);

    const filterQuantityItems: SelectObjectType[] = [
        {
            label: "5",
            value: "5",
        },
        {
            label: "15",
            value: "15",
        },
        {
            label: "25",
            value: "25",
        },
        {
            label: "50",
            value: "50",
        },
    ];

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchTerm = event.target.value.toLowerCase();
        setSearchTerm(searchTerm);

        const filteredRows = data.filter((row: any) => {
            const searchTermLower = searchTerm.toLowerCase();
            const keysToCheck = Object.keys(row);

            for (const key of keysToCheck) {
                if (
                    typeof row[key] === "string" &&
                    row[key].toLowerCase().includes(searchTermLower)
                ) {
                    return true;
                }
            }

            return false;
        });

        setTableRows(filteredRows);
        setCurrentPage(1);
    };

    const handleSort = (columnIndex: number) => {
        const columnName = Object.keys(tableRows[0])[columnIndex];
        const isAscending =
            tableRows[0][columnName] >
            tableRows[tableRows.length - 1][columnName];

        const sortedRows = [...tableRows].sort((rowA, rowB) => {
            const valueA = rowA[columnName].toString().toLowerCase();
            const valueB = rowB[columnName].toString().toLowerCase();
            return isAscending
                ? valueA.localeCompare(valueB)
                : valueB.localeCompare(valueA);
        });

        setTableRows(sortedRows);
        setCurrentPage(1);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleItemsPerPageChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setItemsPerPage(parseInt(event.target.value));
        setCurrentPage(1);
    };

    const renderColumns = () => {
        return (
            <>
                {columns.map((item, index) => (
                    <TableHeaderStyled
                        key={`${item.value}${item.label}`}
                        onClick={() => handleSort(index)}
                    >
                        {item.label}
                    </TableHeaderStyled>
                ))}
                <TableHeaderStyled>Ações</TableHeaderStyled>
            </>
        );
    };

    const renderRows = () => {
        const keys = Object.keys(currentItems[0]);

        return currentItems.map((row, index) => (
            <tr key={index}>
                <>
                    {keys.map((key, index) => (
                        <td key={`${index}${row[key]}`}>{row[key]}</td>
                    ))}
                </>
                <td>
                    <ActionButtonsStyled>
                        <FaEdit className="edit" />
                        <FaTrash className="delete" />
                    </ActionButtonsStyled>
                </td>
            </tr>
        ));
    };

    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    const currentItems = tableRows.slice(firstIndex, lastIndex);

    return (
        <ContainerStyled>
            <SearchBarStyled>
                <FaSearch />
                <SearchInputStyled
                    type="text"
                    placeholder="Buscar"
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </SearchBarStyled>
            <TableStyled>
                <thead>
                    <tr>{renderColumns()}</tr>
                </thead>
                <TableBodyStyled>{renderRows()}</TableBodyStyled>
            </TableStyled>
            <PaginationStyled>
                <InputSelectDefault
                    handleChange={handleItemsPerPageChange}
                    value={itemsPerPage}
                    options={filterQuantityItems}
                />
                <div>
                    Página {currentPage} de{" "}
                    {Math.ceil(tableRows.length / itemsPerPage)}
                </div>
                <div>
                    {Array.from(
                        { length: Math.ceil(tableRows.length / itemsPerPage) },
                        (_, index) => (
                            <ButtonPaginationStyled
                                key={index}
                                onClick={() => handlePageChange(index + 1)}
                                disabled={currentPage === index + 1}
                            >
                                {index + 1}
                            </ButtonPaginationStyled>
                        )
                    )}
                </div>
            </PaginationStyled>
        </ContainerStyled>
    );
}
