import {db} from "../index";
import {userTable} from "../schema";
import {TInsertUser, TSelectUser} from "../models";
import {eq} from "drizzle-orm";

export const UserQuery  = () => {

  /**
   * ユーザを作成する
   * @param data ユーザデータ
   */
  const create = async ({data}:{data:TInsertUser}):Promise<TSelectUser[]> => {
    return db.insert(userTable).values(data).returning();
  };

  /**
   * ユーザが存在するか確認する
   * @param id ユーザのuuid
   */
  const readById = async ({id}:{id:string}):Promise<boolean> => {
    return  await db.query.userTable.findFirst({
      where: (user, {eq}) => eq(user.id, id)
    }) !== undefined;
  }

  return {
    create,
    readById,
  }
}
