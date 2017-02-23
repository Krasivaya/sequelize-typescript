import {Table, Model, Column} from "../../index";

@Table({
  timestamps: true
})
export class TimeStampsUser extends Model {

  @Column
  aNumber: number;

  @Column
  username: string;

  @Column
  updatedAt: Date;
}
