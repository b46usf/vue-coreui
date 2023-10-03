### CTable

```jsx
import { CTable } from '@coreui/vue'
// or
import CTable from '@coreui/vue/src/components/table/CTable'
```

#### Props

| Prop name                                                           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Type                     | Values                                                                                                    | Default |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ | --------------------------------------------------------------------------------------------------------- | ------- |
| **align**                                                           | Set the vertical aligment.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | string                   | `'bottom'`, `'middle'`, `'top'`                                                                           | -       |
| **border-color**                                                    | Sets the border color of the component to one of CoreUI’s themed colors.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | string                   | `'primary'`, `'secondary'`, `'success'`, `'danger'`, `'warning'`, `'info'`, `'dark'`, `'light'`           | -       |
| **bordered**                                                        | Add borders on all sides of the table and cells.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | boolean                  | -                                                                                                         | -       |
| **borderless**                                                      | Remove borders on all sides of the table and cells.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | boolean                  | -                                                                                                         | -       |
| **caption**                                                         | Put the `<caption>` on the top of the table.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | string                   | `'top' \| string`                                                                                         | -       |
| **caption-top** <br><div class="badge bg-primary">4.5.0+</div>      | Set the text of the table caption and the caption on the top of the table.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | string                   | -                                                                                                         | -       |
| **columns** <br><div class="badge bg-primary">4.5.0+</div>          | Prop for table columns configuration. If prop is not defined, table will display columns based on the first item keys, omitting keys that begins with underscore (e.g. '\_props')<br><br>In columns prop each array item represents one column. Item might be specified in two ways:<br>String: each item define column name equal to item value.<br>Object: item is object with following keys available as column configuration:<br>- key (required)(String) - define column name equal to item key.<br>- label (String) - define visible label of column. If not defined, label will be generated automatically based on column name, by converting kebab-case and snake_case to individual words and capitalization of each word.<br>- \_props (Object) - adds classes to all cels in column, ex. \_props: { scope: 'col', className: 'custom-class' },<br>- \_style (Object) - adds styles to the column header (useful for defining widths) | (Column \| string)[]     | -                                                                                                         | -       |
| **color**                                                           | Sets the color context of the component to one of CoreUI’s themed colors.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | string                   | `'primary'`, `'secondary'`, `'success'`, `'danger'`, `'warning'`, `'info'`, `'dark'`, `'light'`, `string` | -       |
| **footer** <br><div class="badge bg-primary">4.5.0+</div>           | Array of objects or strings, where each element represents one cell in the table footer.<br><br>Example items:<br>['FooterCell', 'FooterCell', 'FooterCell']<br>or<br>[{ label: 'FooterCell', _props: { color: 'success' }, ...]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | (FooterItem \| string)[] | -                                                                                                         | -       |
| **hover**                                                           | Enable a hover state on table rows within a `<CTableBody>`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | boolean                  | -                                                                                                         | -       |
| **items** <br><div class="badge bg-primary">4.5.0+</div>            | Array of objects, where each object represents one item - row in table. Additionally, you can add style classes to each row by passing them by '\_props' key and to single cell by '\_cellProps'.<br><br>Example item:<br>{ name: 'John' , age: 12, \_props: { color: 'success' }, \_cellProps: { age: { className: 'fw-bold'}}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Item[]                   | -                                                                                                         | -       |
| **small**                                                           | Make table more compact by cutting all cell `padding` in half.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | boolean                  | -                                                                                                         | -       |
| **striped**                                                         | Add zebra-striping to any table row within the `<CTableBody>`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | boolean                  | -                                                                                                         | -       |
| **striped-columns** <br><div class="badge bg-primary">4.4.0+</div>  | Add zebra-striping to any table column.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | boolean                  | -                                                                                                         | -       |
| **table-foot-props** <br><div class="badge bg-primary">4.5.0+</div> | Properties that will be passed to the table footer component.<br><br>Properties to [CTableFoot](#ctablefoot) component.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | object                   | -                                                                                                         | -       |
| **table-head-props** <br><div class="badge bg-primary">4.5.0+</div> | Properties that will be passed to the table head component.<br><br> Properties to [CTableHead](#ctablehead) component.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | object                   | -                                                                                                         | -       |