//em contrução
// instalar o jest

//https://web.dio.me/course/criando-uma-api-rest-com-nodejs-e-typeorm/learning/bb69f706-ec62-4569-aa05-df9d03a17254

//exemplo get Darielly

/*const UserSchema = require("../models/usersSchema");
const loginController = require("../controller/loginController");
const mockingoose = require("mockingoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

describe("getLogin unit test", () => {
  test("success", async () => {
    mockingoose(UserSchema).toReturn(
      [{ email: "test@email.com", password: "123456" }],
      "find"
    );

    jest.spyOn(bcrypt, "compare").mockReturnValue(true);

    jest
      .spyOn(jwt, "sign")
      .mockReturnValue(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTlmNzExMzNlYzQ3ZTIwMTUwNzczOGMiLCJpYXQiOjE2Mzg3NTA4NDN9.e13u83p6cg6Quk8gk4dZ5pulc7uLhISqdAEF-wplyLE"
      );

    const res = {};
    res.send = jest.fn().mockReturnValue(res);
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn();

    await loginController.createLogin(
      {
        body: {
          email: "test@email.com",
          password: "123456",
        },
      },
      res
    );

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      message: "Allowed access",
      code: "SUCCESS",
      data: {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTlmNzExMzNlYzQ3ZTIwMTUwNzczOGMiLCJpYXQiOjE2Mzg3NTA4NDN9.e13u83p6cg6Quk8gk4dZ5pulc7uLhISqdAEF-wplyLE",
      },
    });
  });

  test("fail and return 404 when email does not exists", async () => {
    mockingoose(UserSchema).toReturn([], "find");

    const res = {};
    res.send = jest.fn().mockReturnValue(res);
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn();

    await loginController.createLogin(
      {
        body: {
          email: "test@email.com",
          password: "123456",
        },
      },
      res
    );

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({
      message: "E-mail not found.",
      code: "NOT_FOUND_ERROR",
      data: null,
    });
  });

  test("fail and return 401 when password is incorrect", async () => {
    mockingoose(UserSchema).toReturn(
      [{ email: "test@email.com", password: "67890" }],
      "find"
    );

    jest.spyOn(bcrypt, "compare").mockReturnValue(false);

    const res = {};
    res.send = jest.fn().mockReturnValue(res);
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn();

    await loginController.createLogin(
      {
        body: {
          email: "test@email.com",
          password: "123456",
        },
      },
      res
    );

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({
      message: "Incorrect password",
      code: "ERROR_INCORRECT_PASSWORD",
      data: null,
    });
  });

  test("fail and return 500 when database request fails", async () => {
    mockingoose(UserSchema).toReturn(
      new Error("Database is not connected"),
      "find"
    );

    const res = {};
    res.send = jest.fn().mockReturnValue(res);
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn();

    await loginController.createLogin(
      {
        body: {
          email: "test@email.com",
          password: "123456",
        },
      },
      res
    );

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      message: "Internal error.",
      code: "INTERNAL_SERVER_ERROR",
      data: null,
    });
  });

  test("fail and return 500 when token sign fail", async () => {
    mockingoose(UserSchema).toReturn(
      [{ email: "test@email.com", password: "123456" }],
      "find"
    );

    jest.spyOn(bcrypt, "compare").mockReturnValue(true);

    jest.spyOn(jwt, "sign").mockImplementation(() => {
      throw new Error("generic error during sign token");
    });

    const res = {};
    res.send = jest.fn().mockReturnValue(res);
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn();

    await loginController.createLogin(
      {
        body: {
          email: "test@email.com",
          password: "123456",
        },
      },
      res
    );

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      message: "Internal error.",
      code: "INTERNAL_SERVER_ERROR",
      data: null,
    });
  });

  test("fail and return 500 when token sign fail", async () => {
    mockingoose(UserSchema).toReturn(
      [{ email: "test@email.com", password: "123456" }],
      "find"
    );

    jest.spyOn(bcrypt, "compare").mockImplementation(() => {
      throw new Error("generic error during compare password");
    });

    const res = {};
    res.send = jest.fn().mockReturnValue(res);
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn();

    await loginController.createLogin(
      {
        body: {
          email: "test@email.com",
          password: "123456",
        },
      },
      res
    );

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      message: "Internal error.",
      code: "INTERNAL_SERVER_ERROR",
      data: null,
    });
  });
});*/


//exemplo post login

/*const UserSchema = require("../models/usersSchema");
const loginController = require("../controller/loginController");
const mockingoose = require("mockingoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

describe("getLogin unit test", () => {
  test("success", async () => {
    mockingoose(UserSchema).toReturn(
      [{ email: "test@email.com", password: "123456" }],
      "find"
    );

    jest.spyOn(bcrypt, "compare").mockReturnValue(true);

    jest
      .spyOn(jwt, "sign")
      .mockReturnValue(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTlmNzExMzNlYzQ3ZTIwMTUwNzczOGMiLCJpYXQiOjE2Mzg3NTA4NDN9.e13u83p6cg6Quk8gk4dZ5pulc7uLhISqdAEF-wplyLE"
      );

    const res = {};
    res.send = jest.fn().mockReturnValue(res);
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn();

    await loginController.createLogin(
      {
        body: {
          email: "test@email.com",
          password: "123456",
        },
      },
      res
    );

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      message: "Allowed access",
      code: "SUCCESS",
      data: {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTlmNzExMzNlYzQ3ZTIwMTUwNzczOGMiLCJpYXQiOjE2Mzg3NTA4NDN9.e13u83p6cg6Quk8gk4dZ5pulc7uLhISqdAEF-wplyLE",
      },
    });
  });

  test("fail and return 404 when email does not exists", async () => {
    mockingoose(UserSchema).toReturn([], "find");

    const res = {};
    res.send = jest.fn().mockReturnValue(res);
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn();

    await loginController.createLogin(
      {
        body: {
          email: "test@email.com",
          password: "123456",
        },
      },
      res
    );

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({
      message: "E-mail not found.",
      code: "NOT_FOUND_ERROR",
      data: null,
    });
  });

  test("fail and return 401 when password is incorrect", async () => {
    mockingoose(UserSchema).toReturn(
      [{ email: "test@email.com", password: "67890" }],
      "find"
    );

    jest.spyOn(bcrypt, "compare").mockReturnValue(false);

    const res = {};
    res.send = jest.fn().mockReturnValue(res);
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn();

    await loginController.createLogin(
      {
        body: {
          email: "test@email.com",
          password: "123456",
        },
      },
      res
    );

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({
      message: "Incorrect password",
      code: "ERROR_INCORRECT_PASSWORD",
      data: null,
    });
  });

  test("fail and return 500 when database request fails", async () => {
    mockingoose(UserSchema).toReturn(
      new Error("Database is not connected"),
      "find"
    );

    const res = {};
    res.send = jest.fn().mockReturnValue(res);
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn();

    await loginController.createLogin(
      {
        body: {
          email: "test@email.com",
          password: "123456",
        },
      },
      res
    );

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      message: "Internal error.",
      code: "INTERNAL_SERVER_ERROR",
      data: null,
    });
  });

  test("fail and return 500 when token sign fail", async () => {
    mockingoose(UserSchema).toReturn(
      [{ email: "test@email.com", password: "123456" }],
      "find"
    );

    jest.spyOn(bcrypt, "compare").mockReturnValue(true);

    jest.spyOn(jwt, "sign").mockImplementation(() => {
      throw new Error("generic error during sign token");
    });

    const res = {};
    res.send = jest.fn().mockReturnValue(res);
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn();

    await loginController.createLogin(
      {
        body: {
          email: "test@email.com",
          password: "123456",
        },
      },
      res
    );

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      message: "Internal error.",
      code: "INTERNAL_SERVER_ERROR",
      data: null,
    });
  });

  test("fail and return 500 when token sign fail", async () => {
    mockingoose(UserSchema).toReturn(
      [{ email: "test@email.com", password: "123456" }],
      "find"
    );

    jest.spyOn(bcrypt, "compare").mockImplementation(() => {
      throw new Error("generic error during compare password");
    });

    const res = {};
    res.send = jest.fn().mockReturnValue(res);
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn();

    await loginController.createLogin(
      {
        body: {
          email: "test@email.com",
          password: "123456",
        },
      },
      res
    );

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      message: "Internal error.",
      code: "INTERNAL_SERVER_ERROR",
      data: null,
    });
  }); */