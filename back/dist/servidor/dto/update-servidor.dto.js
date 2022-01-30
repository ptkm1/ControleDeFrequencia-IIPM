"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateServidorDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_servidor_dto_1 = require("./create-servidor.dto");
class UpdateServidorDto extends (0, mapped_types_1.PartialType)(create_servidor_dto_1.CreateServidorDto) {
}
exports.UpdateServidorDto = UpdateServidorDto;
//# sourceMappingURL=update-servidor.dto.js.map