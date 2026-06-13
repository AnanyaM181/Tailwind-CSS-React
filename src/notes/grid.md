.grid-cols-1          -> grid-template-columns: repeat(1, minmax(0, 1fr));
.grid-cols-2          -> grid-template-columns: repeat(2, minmax(0, 1fr));
.grid-cols-3          -> grid-template-columns: repeat(3, minmax(0, 1fr));
.grid-cols-12         -> grid-template-columns: repeat(12, minmax(0, 1fr));

.col-span-1           -> grid-column: span 1 / span 1;
.col-span-3           -> grid-column: span 3 / span 3;
.col-start-2          -> grid-column-start: 2;
.col-end-4            -> grid-column-end: 4;

.grid-rows-3          -> grid-template-rows: repeat(3, minmax(0, 1fr));
.row-span-2           -> grid-row: span 2 / span 2;

.gap-4                -> gap: 1rem;
.gap-x-8              -> column-gap: 2rem;
.gap-y-2              -> row-gap: 0.5rem;

.place-items-center   -> place-items: center;
.place-content-center -> place-content: center;