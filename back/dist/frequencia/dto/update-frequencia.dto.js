"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFrequenciaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_frequencia_dto_1 = require("./create-frequencia.dto");
class UpdateFrequenciaDto extends (0, mapped_types_1.PartialType)(create_frequencia_dto_1.CreateFrequenciaDto) {
}
exports.UpdateFrequenciaDto = UpdateFrequenciaDto;
//# sourceMappingURL=update-frequencia.dto.js.map