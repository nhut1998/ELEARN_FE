import { ICourse, IResCourse, IResponseCatalog } from "types/models/Course";
import { apiGet, apiPost } from "utils/api";
import CatalogPaths from "./paths";


export const catalogCourse = () => {
return apiGet<IResponseCatalog>(CatalogPaths.Catalog)
}
