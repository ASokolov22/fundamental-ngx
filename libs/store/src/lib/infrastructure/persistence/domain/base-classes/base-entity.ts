import { Composite } from './composite';

/**
 * BaseEntityDTO that extends passed Entity DTO
 * */
export interface BaseEntityDTO {
    id: number;
}

/**
 * Base Entity follows the DDD definition of Entity
 */
export abstract class BaseEntity<EntityProps extends BaseEntityDTO> extends Composite<EntityProps> {
     constructor(dto: EntityProps) {
         super();
         this._dto = dto;
     }
     _dto: EntityProps;

    /**
     * Check if Entity has proper instance
     * @param entity
     */
    static isEntity(entity: unknown): entity is BaseEntity<any> {
        return entity instanceof BaseEntity;
    }

    /**
     *  Check if two entities are the same Entity. Checks using ID field.
     * @param object Entity
     */
    public equals(object: BaseEntity<EntityProps>): boolean {
        if (object === null || object === undefined) {
            return false;
        }

        if (this === object) {
            return true;
        }

        if (!BaseEntity.isEntity(object)) {
            return false;
        }

        return this._dto.id === object._dto.id;
    }
}
