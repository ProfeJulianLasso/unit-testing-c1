import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: AppService,
          useValue: {
            getHello: jest.fn(),
          },
        },
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService);
  });

  it('should return "Hello World!"', () => {
    // Arrange
    const mockData = 'Hello World!';
    const expected = 'Hello World!';
    jest.spyOn(appService, 'getHello').mockReturnValue(mockData);

    // Act
    const result = appController.getHello();

    // Assert
    expect(result).toEqual(expected);
    expect(appService.getHello).toHaveBeenCalled();
  });
});
