"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePostoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_posto_dto_1 = require("./create-posto.dto");
class UpdatePostoDto extends (0, mapped_types_1.PartialType)(create_posto_dto_1.CreatePostoDto) {
}
exports.UpdatePostoDto = UpdatePostoDto;
//# sourceMappingURL=update-posto.dto.js.map